function paginate(response, limit=10, page=1) {
    const cappedLimit = limit > 100 ? 100 : limit
    const startIndex = (page - 1) * cappedLimit;
    const endIndex = page * cappedLimit;
    const totalPages = Math.ceil(response.results.length / cappedLimit)

    const result = {};

    if (endIndex < response.results.length) {
        result.next = {
            page: page + 1,
            limit: cappedLimit,
        };
    }
    if (startIndex > 0) {
        result.previous = {
            page: page - 1,
            limit: cappedLimit,
        };
    }

    return { 
             results: response.results.slice(startIndex, endIndex),
             meta: {
               totalCount: response.results.length,
               page: Number(page),
               limit: Number(cappedLimit),
               totalPages: totalPages
             }
          };
}

module.exports = { paginate }