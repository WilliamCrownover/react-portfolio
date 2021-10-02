
const pageNames = [
	{
		id: 1,
		name: "About Me"
	},
	{
		id: 2,
		name: "Portfolio"
	},
	{
		id: 3,
		name: "Contact"
	},
	{
		id: 4,
		name: "Resume"
	}
];

export default function Navigation() {

	return (
		<ul>
			{pageNames.map((page) => (
				<li key={page.id}>
					<a href={"#" + page.name}>
						{page.name}
					</a>
				</li>
			))}
		</ul>
	);
}