import React from "react";

export const Form = props => (
    <form>
        <div className="form-group">
            {props.children}
        </div>
    </form>
);