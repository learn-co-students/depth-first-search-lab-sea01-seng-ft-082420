function findNode(nodeName, vertices){
    return vertices.find(function(vertex){
        return vertex.name == nodeName
    })
}

function findAdjacent(nodeName, vertices, edges){
    return edges.filter(function(edge){
        return edge.includes(nodeName)
    }).map(function(edge){
        return edge.filter(function(node){
            return (node != nodeName)
        })[0]
    }).map(function(name){
        return findNode(name, vertices)
    }).filter(function(node){
        return !node.discovered
    })
}

function depthFirstSearch(rootNode, vertices, edges){
    let stack = []
    stack.push(rootNode)
    let visited = [rootNode]

    while(stack.length !=0){
        let vertex = stack.pop()
        if(!vertex.discoveted){
            vertex.discovered = true

            findAdjacent(vertex.name, vertices, edges).forEach(function(node){
                visited.push(node)
                stack.push(node)
            })
        }
    }
    return visited
}