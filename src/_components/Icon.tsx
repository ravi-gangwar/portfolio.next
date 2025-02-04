import React from 'react';

type TIcon = {
    IconButton: React.FC<{ size?: string; color?: string; className?: string; style?: React.CSSProperties }>;
    size?: string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
};

const Icon: React.FC<TIcon> = ({ IconButton, size, color, className, style }) => {
    return <IconButton size={size} color={color} className={className} style={style} />;
};

export default Icon;
