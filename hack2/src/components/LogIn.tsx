import { useState } from "react";

interface Login {
    teamName: string;
    password: string;
}



    
const inputClass =
    "w-full border-2 border-gray-500 rounded-full px-4 py-1 mb-2 bg-white";

export default function Login() {
    const [login, setLogin] = useState<Login>({
        teamName: "",
        password: "",
    });

    const [logged, setLogged]=useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
        
        localStorage.setItem(
            "token-info",
            JSON.stringify(login)
        );
        setLogged(true);
    }

    const logout = () => {
        localStorage.removeItem("token-info");
        setLogged(false);
    };
    

    return (
        <div className="size-full flex justify-center items-center">
            <article className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-slate-200 sm:rounded-xl sm:my-5 px-10 py-4 flex flex-col items-center">
                {!logged? (
                <>    
                <h1 className="text-2xl font-bold mb-3">Login Form</h1>

                <form onSubmit={handleSubmit} className="w-full">
                    <section className="w-full sm:flex justify-between">
                        <div className="w-full sm:mr-2 flex flex-col">
                            <label htmlFor="teamName" className="font-bold">
                                teamName:
                            </label>
                            <input
                                type="text"
                                id="teamName"
                                name="teamName"
                                required
                                className={inputClass}
                                onChange={(e) =>
                                    setLogin({ ...login, teamName: e.target.value })
                                }
                            />
                        </div>
                    </section>

                    <section className="w-full flex flex-col">
                        <label htmlFor="password" className="font-bold">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className={inputClass}
                            onChange={(e) =>
                                setLogin({ ...login, password: e.target.value })
                            }
                        />
                    </section>

                    <section className="w-full flex justify-center">
                        <button
                            type="submit"
                            className="bg-gray-500 px-10 mt-1 py-1 rounded-full text-white font-bold cursor-pointer"
                        >
                            Submit
                        </button>
                    </section>
                </form>

                {submitted && (
                    <p className="mt-4 font-bold text-green-700" role="status">
                        ¡Formulario enviado, {login.teamName || "team"}!
                    </p>
                )} </> ):(<>
                        <h1>User is logged in</h1>
                        <button onClickCapture={logout}>
                            logout user
                        </button>
                    </>)}
            </article>
        </div>
    );
}
