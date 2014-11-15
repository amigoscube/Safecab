var homeView = function () {
    this.render = function () {
        this.el.html(homeView.template());
        return this;
    };

    this.initialise = function () {
        this.el = $('<div/>');
    };

    this.initialise();
}

homeView.template = Handlebars.compile($("#homeView").html());