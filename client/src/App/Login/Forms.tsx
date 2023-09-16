import { useState } from "react";

export default function Forms() {
    const [type, setType] = useState<"login" | "signup">("login");

    return (
        <form action="submit" className="py-2 flex flex-col items-center gap-4">
            {/* Form inputs */}
            {type === "signup" && (
                <input
                    type="text"
                    placeholder="Username"
                    className="input input-primary lg:w-[25rem]"
                    aria-label="Username"
                />
            )}
            <input
                type="email"
                placeholder="Email"
                className="input input-primary lg:w-[25rem]"
                aria-label="Email"
            />
            <input
                type="password"
                placeholder="Password"
                className="input input-primary lg:w-[25rem]"
                aria-label="Password"
            />
            {type === "login" ? (
                <>
                    <small>
                        New user?{" "}
                        <button
                            className="link"
                            type="button"
                            onClick={() => {
                                setType("signup");
                            }}
                        >
                            Signup
                        </button>
                    </small>
                    <button
                        className="btn btn-primary lg:w-[25rem]"
                        type="submit"
                        aria-label="Login"
                    >
                        Login
                    </button>
                </>
            ) : (
                <>
                    <small>
                        Already a user?{" "}
                        <button
                            className="link"
                            type="button"
                            onClick={() => {
                                setType("login");
                            }}
                            aria-label="Login"
                        >
                            Login
                        </button>
                    </small>
                    <button
                        className="btn btn-primary lg:w-[25rem]"
                        type="submit"
                        aria-label="Login"
                    >
                        Signup
                    </button>
                </>
            )}

            <br />

            {/* Social Logins */}
            <button className="btn lg:w-[25rem]" type="button">
                Sign in with Google
            </button>
            <button className="btn lg:w-[25rem]" type="button">
                Sign in with Github
            </button>
        </form>
    );
}
