import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-primary text-center py-2 px-5">
			<div className="container text-light">
				<small>&copy; 2024 {" "}
					<Link href="https://github.com/haijiangyan">
						<a className="text-light react_black">haijiangyan</a>
					</Link>
					. Open sourced under {" "}
					<Link href="https://github.com/haijiangyan/portfolio/blob/main/LICENSE">
						<a className="text-light react_black">MIT</a>
					</Link>
					{" "} License
				</small>
			</div>
		</footer>
	);
}