import { Navbar } from "./Navbar";

export function Drawer(props: any) {
    const signedIn = false;
    return (
        <>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content p-8">
                    {/* Page content here */}
                    {props.children}
                </div>
                <div className="drawer-side">
                    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content text-center">
                        {/* Sidebar content here */}
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        {signedIn ? (
                            <li>
                                <a>Logout</a>
                            </li>
                        ) : (
                            <li>
                                <a href="/login">Login</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
