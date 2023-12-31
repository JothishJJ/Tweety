export function Navbar() {
    const signedIn = false;

    return (
        <>
            <div className="sticky top-0 left-0 right-0 z-10 bg-base-100">
                <div className="navbar">
                    <div className="flex-1">
                        <a
                            className="btn btn-ghost normal-case text-xl"
                            href="/"
                        >
                            Tweety
                        </a>
                    </div>
                    <div className="flex-none gap-2">
                        {signedIn && (
                            <>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="input input-bordered w-24 md:w-auto"
                                    />
                                </div>
                                <div className="dropdown dropdown-end">
                                    <label
                                        tabIndex={0}
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            {/* Profile image  */}
                                        </div>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <hr className="border-t-2" />
            </div>
        </>
    );
}
