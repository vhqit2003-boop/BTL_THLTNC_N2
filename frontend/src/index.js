 // nạp thư viện react
 const React = require('react')
// nạp thư viện react-dom
const ReactDOM = require('react-dom')

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <p>Chúc mừng bạn đã cài đặt React thành công!</p>
            <p>Chúc bạn học React vui vẻ!</p>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

