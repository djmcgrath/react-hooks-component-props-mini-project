import React from "react";
import Article from "./Article"

function ArticleList ({posts}){
    return (
        <main>
            {posts.map((pItem) => (
                <Article 
                    key={pItem.id} 
                    title={pItem.title} 
                    date={pItem.date} 
                    preview={pItem.preview} 
                    minutes={pItem.minutes}
                />
            ))}
        </main>
    )
}


export default ArticleList