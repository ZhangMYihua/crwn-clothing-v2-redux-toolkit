import { CardElement } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {
    return (
        <div>
            <CardElement />
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
        </div>
    );
};

export default PaymentForm;
