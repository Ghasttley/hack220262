import { useState } from "react";

interface RegisterData {
	teamName: string;
	email: string;
	password: string;
}

const inputClass =
	"w-full border-2 border-gray-500 rounded-full px-4 py-1 mb-2 bg-white";

export default function Register() {
	const [registerData, setRegisterData] = useState<RegisterData>({
        teamName: "",
		email: "",
		password: "",
	});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
	}

	return (
		<div className="size-full flex justify-center items-center">
			<article className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-slate-200 sm:rounded-xl sm:my-5 px-10 py-4 flex flex-col items-center">
				<h1 className="text-2xl font-bold mb-3">Register Form</h1>

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
									setRegisterData({ ...registerData, teamName: e.target.value })
								}
							/>
						</div>
						<div className="w-full flex flex-col">
							<label htmlFor="email" className="font-bold">
								Email:
							</label>
							<input
								type="text"
								id="email"
								name="email"
								required
								className={inputClass}
								onChange={(e) =>
									setRegisterData({ ...registerData, email: e.target.value })
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
								setRegisterData({ ...registerData, password: e.target.value })
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
						¡Formulario enviado, {registerData.teamName || "team"}!
					</p>
				)}
			</article>
		</div>
	);
}
