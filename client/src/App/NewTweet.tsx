import { useState } from "react";

export default function NewTweets() {
    const [tweet, setTweet] = useState("");
    const [error, setError] = useState<String | undefined>();

    function Change(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const text = e.target.value;

        if (text && text.length > 250) {
            setError("Tweet cannot be more than 250 characters");
        }

        setTweet(text);
    }

    return (
        <>
            <form className="form-control flex flex-col gap-2">
                <textarea
                    placeholder="Message"
                    className="textarea textarea-primary rounded-sm"
                    onChange={(e) => Change(e)}
                    value={tweet}
                />
                {error && <small className="text-error">{error}</small>}
                <button className="btn btn-primary self-end rounded-md">
                    Tweet
                </button>
                <hr className="border-t-2" />
            </form>
        </>
    );
}
