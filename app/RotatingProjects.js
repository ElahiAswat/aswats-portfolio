"use client";

import { useEffect, useState } from 'react';

const projects = [
	{ name: 'Smart Home Controller', type: 'hardware' },
	{ name: 'AI Chatbot', type: 'software' },
	{ name: 'Wearable Health Monitor', type: 'hardware' },
	{ name: 'Portfolio Website', type: 'software' },
];

const getTypeLabel = (type) => (type === 'hardware' ? '🛠️ Hardware' : '💻 Software');

export default function RotatingProjects() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((i) => (i + 1) % projects.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	const project = projects[index];

	return (
		<div
			style={{
				textAlign: 'center',
				padding: '2rem',
				borderRadius: '1rem',
				background: 'rgba(0,0,0,0.85)',
				boxShadow: '0 0 40px #CFFF04',
				minWidth: '320px',
			}}
		>
			<h1
				style={{
					fontSize: '2.5rem',
					marginBottom: '1rem',
					color: '#CFFF04',
				}}
			>
				{project.name}
			</h1>
			<span
				style={{
					fontSize: '1.2rem',
					color: '#CFFF04',
					fontWeight: 'bold',
				}}
			>
				{getTypeLabel(project.type)}
			</span>
		</div>
	);
}
