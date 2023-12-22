const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>PORTFOLIO</h1>
            <div className="star-container">
                <span>__________</span>
                <span className="star">&#9733;</span>
                <span>__________</span>
            </div>
            <div className="cards-container">
                <div className="card card1">
                    <img src="https://dev-updates-uploads.s3.ap-south-1.amazonaws.com/1665673562977-Best%20way%20to%20learn%20javascript.jpg" />
                </div>
                <div className="card card2">
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png" />
                </div>
                <div className="card card3">
                    <img src="https://www.ntuclearninghub.com/documents/39367/4216797/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476/" />
                </div>
                <div className="card card4">
                    <img src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" />
                </div>
                <div className="card card5">
                    <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg" />
                </div>
                <div className="card card6">
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png" />
                </div>
            </div>
        </div>
    )
}
export default Portfolio