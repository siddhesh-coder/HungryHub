import axios from "axios";
import BASE_URL from "./helper/baseUrl";

const checkout = async (finalAmount) => {
  const {
    data: { key },
  } = await axios.get(`${BASE_URL}/api/getkey`);

  const {
    data: { order },
  } = await axios.post(`${BASE_URL}/api/checkout`, {
    finalAmount,
  });

  const options = {
    key,
    amount: order.amount,
    currency: "INR",
    name: "hungryHub",
    description: "Test Transaction from hungryHub",
    image: "https://i.ibb.co/1m9mkTL/LOGO-1.png",
    order_id: order.id,
    callback_url: `${BASE_URL}/api/paymentverification`,
    prefill: {
      name: "Test1",
      email: "Test1@gmail.com",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#121111",
    },
  };
  const razor = new window.Razorpay(options);
  razor.open();
};

export default checkout;
