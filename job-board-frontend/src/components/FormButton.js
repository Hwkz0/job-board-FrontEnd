import React from "react";
import { Link } from "react-router-dom";

export default function FormButton({ onClick, buttonText, buttonColor, onSubmit }) {
    return (
        <div className="mb-3">
            {onSubmit ? (
            <button
                type="submit"
                className={`btn btn-${buttonColor} w-150`}
                onClick={onClick}
                >
                {buttonText}
            </button>
            ) : (
            <button
                type="submit"
                className={`btn btn-${buttonColor} w-150`}
                onClick={onClick}
                >
                {buttonText}
            </button>
            )}
            {!onSubmit && (
            <Link className="btn btn-danger ms-2" to="/">
                Cancel
            </Link>
            )}
        </div>

    );
}