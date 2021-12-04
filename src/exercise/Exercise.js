// 1a----------3a, 3b
function Exercise ({good = "Great", bad = "Not Great"}){
    // 2a
    return (
        <section>
            {/* 3c */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            </section>
    );
}

// 1b
export default Exercise;