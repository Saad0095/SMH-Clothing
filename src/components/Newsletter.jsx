import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SubscriptionAlert from "./SubscriptionAlert";
import useSubscription from "../hooks/useSubscription";

const Newsletter = () => {
  const {email,setEmail , errorMsg, subscriptionMsgShow, setSubscriptionMsgShow,  handleSubscribe} = useSubscription();

  return (
    <div className="w-full ">
      <div className="newsletter flex flex-col justify-center items-center px-5 py-20 max-w-96 mx-auto">
        <h1 className="text-3xl font-bold">Newsletter</h1>
        <h4 className="text-lg p-2">Get the latest trends first</h4>
        <div className="border-b-2 border-black w-full flex justify-between px-2 py-1 m-4 dark:border-white">
          <input
            type="email"
            value={email}
            className="border-none outline-none w-4/5 caret-cyan-600 bg-inherit p-2"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubscribe();
              }
            }}
            required
          />
          <button onClick={handleSubscribe}>
            <FontAwesomeIcon className="cursor-pointer" icon={faArrowRight} />
          </button>
        </div>
        {errorMsg && <p className="text-red-600 w-full">{errorMsg}</p>}
      </div>
      {subscriptionMsgShow && (
        <SubscriptionAlert setSubscriptionMsgShow={setSubscriptionMsgShow} />
      )}
    </div>
  );
};

export default Newsletter;
