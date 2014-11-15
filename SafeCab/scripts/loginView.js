var loginView = function () {
    this.render = function () {
        this.el.html(loginView.template());
        return this;
    };

    this.skip = function () {        
        $('body').html(new homeView().render().el);        
    };

    this.register = function () {
        $('body').html(new register().render.el);
    }

    this.initialise = function () {
        this.el = $('<div/>');
        this.el.on("click", ".skip", this.skip);
        this.el.on("click", ".signup", this.register);
    };

    this.initialise();
}

loginView.template = Handlebars.compile($("#loginView").html());