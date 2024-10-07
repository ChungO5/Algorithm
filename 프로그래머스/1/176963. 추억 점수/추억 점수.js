function solution(name, yearning, photo) {
    return photo.map((a) => 
        a.map((a) =>
            yearning[name.indexOf(a)] === undefined
                ? 0
                : yearning[name.indexOf(a)]
        ).reduce((a, b) => a + b, 0)
    )
}