import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
    return (
        <div>
                <h1 className="font-bold text-center text-5xl text-yellow-700">
                    ゆるプロ<span className="text-blue-900">日記</span>
                </h1>
        </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
