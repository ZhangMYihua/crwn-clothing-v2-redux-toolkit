require("dotenv").config();
const stripe = require('stripe')(
    "sk_test_51MkNe4EIO78yYHjkFlBG9DIQFf5iGbAIOceq4qS4VhEihSXWkHZGchdhQE1Sl2eXrLXGf8Ln7XHrk5qjxoh2EXvc00HvQAM6uC"
);

exports.handler = async (event, content) => {
    try {
        console.log(event.body)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: event.body }),
        };
    } catch (error) {
        console.log(error);
    }
};

// exports.handler = async (event) => {
//     try {
//         const { amount } = JSON.parse(event.body);
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: "eur",
//             payment_method_types: ["card"],
//         });

//         return {
//             stausCode: 200,
//             body: JSON.stringify({ paymentIntent }),
//         };
//     } catch (error) {
//         console.log({ error });

//         return {
//             statusCode: 400,
//             body: JSON.stringify({ error }),
//         };
//     }
// };
