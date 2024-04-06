import { Product } from "../components";
import p1_img from "./p11.webp";
import p2_img from "./p12.webp";
import p3_img from "./p13.webp";
import p4_img from "./p21.webp";
import p5_img from "./p22.webp";
import p6_img from "./p23.webp";
import p7_img from "./p31.webp";
import p8_img from "./p32.webp";
import p9_img from "./p33.webp";
import p10_img from "./p41.webp";
import p11_img from "./p42.webp";
import p12_img from "./p43.webp";
import p13_img from "./p51.webp";
import p14_img from "./p52.webp";
import p15_img from "./p53.webp";

export const all_product = [
    {
        id: 1,
        name: "The Night Circus by Erin Morgenstern",
        category: "fiction",
        image: p1_img,
        price: 1030,
        description: "The Night Circus, is a phantasmagorical fairy tale set near an ahistorical Victorian London in a wandering, magical circus that is open only from sunset to sunrise.",
        title: "thenightcircus",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 2,
        name: "The Goldfinch by Donna Tartt",
        category: "fiction",
        image: p2_img,
        price: 999,
        description: "The Goldfinch by Donna Tartt is a Pulitzer Prize-winning novel that examines the transitory conditions that govern our lives. ",
        title: "thegoldfinch",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 3,
        name: "Circe by Madeline Miller",
        category: "fiction",
        image: p3_img,
        price: 1100,
        description: "Circe is an explorer, a lover, a destroyer, and can be a very angry goddess.",
        title: "circe",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 4,
        name: "Educated by Tara Westover",
        category: "non-fiction",
        image: p4_img,
        price: 1010,
        description: "Educated is a memoir by Tara Westover, an American author living in the UK.",
        title: "educated",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 5,
        name: "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
        category: "non-fiction",
        image: p5_img,
        price: 1001,
        description: "The book, focusing on Homo sapiens, surveys the history of humankind, starting from the Stone Age and going up to the twenty-first century.",
        title: "sapiens",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 6,
        name: "Becoming by Michelle Obama",
        category: "non-fiction",
        image: p6_img,
        price: 340,
        description: " The book chronicles her journey from a young girl born in Chicago to the White House, her time in the White House, her public health campaign, and her role as a mother.",
        title: "becoming",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 7,
        name: "Gone Girl by Gillian Flynn",
        category: "mystery & thriller",
        image: p7_img,
        price: 560,
        description: "It's a love story wrapped in a mystery that asks the eternal question of all good relationships gone bad: How did we get from there to here?",
        title: "gonegirl",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 8,
        name: "The Girl on the Train by Paula Hawkins",
        category: "mystery & thriller",
        image: p8_img,
        price: 899,
        description: "The book gives narratives from three different women about relationship troubles (caused by coercive/controlling men) and, for the main protagonist, alcoholism.",
        title: "thegirlonthetrain",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 9,
        name: "The Da Vinci Code by Dan Brown",
        category: "mystery & thriller",
        image: p9_img,
        price: 330,
        description: "The Da Vinci Code is a mystery thriller that was a massive best seller that has sold over 80 million copies worldwide.",
        title: "thedavincicode",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 10,
        name: "Dune by Frank Herbert",
        category: "science-fiction",
        image: p10_img,
        price: 410,
        description: "It follows the story of Paul Atreides, a young nobleman who rises to power on the desert planet Arrakis, the only known source of the potent and dangerous spice melange.",
        title: "dune",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 11,
        name: "The Martian by Andy Weir",
        category: "science-fiction",
        image: p11_img,
        price: 399,
        description: "The story follows an American astronaut, Mark Watney, as he becomes stranded alone on Mars in 2035 and must improvise in order to survive.",
        title: "themartian",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 12,
        name: "The Name of the Wind by Patrick Rothfuss",
        category: "science-fiction",
        image: p12_img,
        price: 699,
        description: "The Name of the Wind” is an epic fantasy novel written by Patrick Rothfuss. Set in a world of magic and adventure, the story follows the life of a young protagonist named Kvothe, who becomes a legendary figure known as Kvothe the Arcane.",
        title: "thenameofthewind",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 13,
        name: "The Notebook by Nicholas Sparks",
        category: "romance",
        image: p13_img,
        price: 899,
        description: "The Notebook is a novel by Nicholas Sparks that tells the story of Noah Calhoun and Allie Nelson, a couple whose love endures over five decades.",
        title: "thenotebook",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 14,
        name: "Pride and Prejudice by Jane Austen",
        category: "romance",
        image: p14_img,
        price: 599,
        description: "The story revolves around the Bennet family and their five daughters, exploring themes of love, class, and social expectations.",
        title: "prideandprejudice",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        id: 15,
        name: "Me Before You by Jojo Moyes",
        category: "romance",
        image: p15_img,
        price: 849,
        description: "From the #1 New York Times bestselling author of The Giver of Stars and the forthcoming Someone Else's Shoes, discover the love story that captured over 20 million hearts in Me Before You, After You, and Still Me.",
        title: "mebeforeyou",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    },
]
