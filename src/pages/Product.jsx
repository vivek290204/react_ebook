import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      try {
        const productResponse = await fetch(`/all_product.js/${id}`);
        if (!productResponse.ok) {
          throw new Error('Failed to fetch product data');
        }
        const productData = await productResponse.json();
        setProduct(productData);
        setLoading(false);

        const similarProductsResponse = await fetch(
          `/all_product/${productData.category}`
        );
        if (!similarProductsResponse.ok) {
          throw new Error('Failed to fetch similar products data');
        }
        const similarProductsData = await similarProductsResponse.json();
        setSimilarProducts(similarProductsData);
        setLoading2(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setLoading2(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">₹{product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const SimilarProducts = () => {
    if (loading2 || !similarProducts) {
      return <Skeleton height={150} count={3} />;
    }

    return (
      <div className="container my-5 py-2">
        <div className="row">
          {similarProducts.map((similarProduct) => (
            <div key={similarProduct.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={similarProduct.image}
                  alt={similarProduct.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{similarProduct.title}</h5>
                  <p className="card-text">₹{similarProduct.price}</p>
                  <Link
                    to={`/product/${similarProduct.id}`}
                    className="btn btn-primary"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? <Loading /> : <ShowProduct />}
        <SimilarProducts />
      </div>
      <Footer />
    </>
  );
};

export default Product;
