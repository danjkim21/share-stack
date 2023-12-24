interface AvatarGroupInterfaceProps {
	avatars: any;
}

function AvatarGroup({ avatars }: AvatarGroupInterfaceProps) {
	const avatar = avatars.map((avatar: any) => {
		return (
			<img
				className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
				src={avatar.avatarSrc}
				alt={avatar.name}
				key={avatar.name}
			/>
		);
	});
	return <div className="flex -space-x-1 overflow-hidden">{avatar}</div>;
}

export default AvatarGroup;
