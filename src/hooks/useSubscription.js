import { useState } from "react";

const useSubscription = () => {
  const [email, setEmail] = useState("");
  const [subscriptionMsgShow, setSubscriptionMsgShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubscribe = (e) => {
    if (e) e.preventDefault();
    if (email === "") {
      setErrorMsg("*Please fill out this field!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("*Invalid Email Address");
    } else {
      setEmail("");
      setErrorMsg(null);
      setSubscriptionMsgShow(true);
      setTimeout(() => {
        setSubscriptionMsgShow(false);
      }, 3000);
      return true;
    }
  };

  return {
    email,
    setEmail,
    subscriptionMsgShow,
    setSubscriptionMsgShow,
    errorMsg,
    handleSubscribe,
  };
};

export default useSubscription;
