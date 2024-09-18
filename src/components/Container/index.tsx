import React from "react";

const Container = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <div className="max-w-[1200px] m-auto px-5 py-4 border rounded-xl my-3">
            {children}
        </div>
    );
};

export default Container;
