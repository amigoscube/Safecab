var register = function () {
    this.render = function () {
        this.el.html(register.template());
        return this;
    };

    this.skip = function () {
        $('body').html(new homeView().render().el);
    };

    this.initialise = function () {
        this.el = $('<div/>');
        this.el.on("click", ".skip", this.skip);
    };

    this.initialise();
}

register.template = Handlebars.compile($("#register").html());