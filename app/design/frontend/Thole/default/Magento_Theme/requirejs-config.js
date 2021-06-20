var config = {
    deps: [
        "js/jquery.thole"
    ],

    paths: {
            "thole": "js/jquery.thole"
    },

	shim: {
        "thole" : {
            deps: ["jquery"]
        }
    }
} 