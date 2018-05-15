
if (typeof Entities == 'undefined') {
    Entities = {};
}

Entities.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = Entities;
    if (parts[0] === "Entities") {
        parts = parts.slice(1);
    }
    for (var i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

