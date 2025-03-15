import React from "react";
import CodeConsole from "../includes/CodeConsole";

const CodeEditor = () => {
    return (
        <div className="flex justify-center mb-5">
            <div className="min-w-1/2 bg-[#1d1e22] shadow-[0px_4px_30px_rgba(0,0,0,0.5)] rounded-lg p-2 text-white">
                {/* Header */}
                <div className="flex items-center justify-between m-2">
                    <span className="font-bold text-sm tracking-widest text-gray-300">JavaScript</span>
                </div>

                {/* Code Content */}
                <div className="mx-2 mb-3">
                    <code className="font-mono text-sm">
                        <p>
                            <span className="text-yellow-400">const Routine </span> <span>{`= ()=>{`}</span>
                        </p>
                        <CodeConsole Text={"Eat"} />
                        <CodeConsole Text={"Code"} />
                        <CodeConsole Text={"Sleep"} />
                        <CodeConsole Text={"Repeat()"} />
                        <p>{`}`}</p>
                    </code>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
