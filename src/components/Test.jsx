import './Test.scss'

export default function Test() {
    return (
        <>
            <div className="contrainer">
                <div style={{ backgroundColor: "lightblue" }}>
                    dasdas
                    <p>dasdaczxc</p>
                </div>
                <div style={{ backgroundColor: "lightpink" }}>
                    dasdas
                    <p>dasdaczxc</p>
                </div>
                <div style={{ backgroundColor: "lightblue" }}>
                    dasdas
                    <p>dasdaczxc</p>
                </div>
                <div style={{ backgroundColor: "lightpink" }}>
                    dasdas
                    <p>dasdaczxc</p>
                </div>
            </div>

            <div className="flex-container">
                <div style={{ backgroundColor: "lightpink", flex: 1 }}>
                    dasdas
                    <p>dasdaczxc</p>
                </div>
                <div style={{ backgroundColor: "lightblue", width: '300px' }}>
                    dasdas
                    <p>dasdaczxc</p>
                    <p>dasdaczxc</p>
                </div>

                <div style={{ backgroundColor: "lightseagreen", flex: 2 }}>
                    dasdas
                    <p>dasdaczxc</p>
                </div>
            </div>
        </>
    );
}
