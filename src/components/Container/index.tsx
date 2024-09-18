import React from "react";

const Container = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return <div className="max-w-[1200px] m-auto">{children}</div>;
};

export default Container;
