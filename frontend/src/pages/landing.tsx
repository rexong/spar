import React from "react";

const dashboardData = [
	{
		title: "Personas",
		count: 12,
		description: "Create and manage user personas for testing",
		color: "bg-blue-600",
		icon: "👤",
	},
	{
		title: "Goals",
		count: 8,
		description: "Define conversation objectives",
		color: "bg-green-500",
		icon: "🎯",
	},
	{
		title: "Conversations",
		count: 45,
		description: "View simulated conversations",
		color: "bg-purple-500",
		icon: "💬",
	},
	{
		title: "Annotations",
		count: 32,
		description: "Human feedback on conversations",
		color: "bg-yellow-400",
		icon: "📝",
	},
	{
		title: "LLM Evaluators",
		count: 3,
		description: "Configure AI-based evaluation systems",
		color: "bg-red-500",
		icon: "🤖",
	},
	{
		title: "Results",
		count: 28,
		description: "Compare and analyze evaluation results",
		color: "bg-indigo-500",
		icon: "📊",
	},
];

const recentActivity = [
	{
		title: "New Persona Created",
		detail: '"Technical Support Agent" – 2 hours ago',
	},
	{
		title: "New Annotations",
		detail: "5 conversations annotated by John Doe – 3 hours ago",
	},
	{
		title: "Evaluator Updated",
		detail: '"Helpfulness Evaluator v2" created – 5 hours ago',
	},
	{
		title: "New Goal Created",
		detail: '"Troubleshoot network connectivity issues" – 1 day ago',
	},
];

const Dashboard: React.FC = () => (
	<div className="p-8 bg-slate-50 min-h-screen" data-testid="dashboard">
		<h1 className="text-3xl font-bold">Dashboard</h1>
		<p className="text-slate-500 mb-8">
			Welcome to the GenAI Evaluation Platform
		</p>
		<div
			className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
			data-testid="dashboard-cards"
		>
			{dashboardData.map((item) => (
				<div
					key={item.title}
					className="flex items-center bg-white rounded-xl shadow-sm p-6 min-w-[220px] gap-4"
					data-testid={`dashboard-card-${item.title
						.toLowerCase()
						.replace(/\s/g, "-")}`}
				>
					<div
						className={`flex items-center justify-center w-12 h-12 rounded-lg text-2xl font-bold text-white ${item.color}`}
					>
						{item.icon}
					</div>
					<div>
						<div className="font-semibold text-lg">{item.title}</div>
						<div className="text-2xl font-bold">{item.count}</div>
						<div className="text-slate-500 text-sm">
							{item.description}
						</div>
					</div>
				</div>
			))}
		</div>
		<div
			className="bg-white rounded-xl shadow-sm p-6 mt-8"
			data-testid="recent-activity"
		>
			<h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
			<div className="text-slate-500 mb-4">
				Latest updates across the platform
			</div>
			<ul>
				{recentActivity.map((activity, idx) => (
					<li
						key={idx}
						className={`py-3 flex justify-between ${
							idx !== recentActivity.length - 1
								? "border-b border-slate-100"
								: ""
						}`}
						data-testid={`recent-activity-item-${idx}`}
					>
						<span className="font-medium">{activity.title}</span>
						<span className="text-slate-500">{activity.detail}</span>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Dashboard;