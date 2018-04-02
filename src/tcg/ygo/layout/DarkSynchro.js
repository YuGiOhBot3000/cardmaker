define(["react", "react-class", "draw/Group", "./component/All"], function DarkSynchro(React, ReactClass, Group, C)
{
	var DarkSynchro = ReactClass({
		render: function render()
		{
			return React.createElement(
				Group,
				this.props,
				React.createElement(C.Image, { value: this.props.image, pendulum: this.props.pendulum.enabled }),
				React.createElement(C.Border, { value: "DarkSynchro", pendulum: this.props.pendulum.enabled }),
				React.createElement(C.CardName, { value: this.props.name, color: "white" }),
				React.createElement(C.Attribute, { value: this.props.attribute }),
				React.createElement(C.Level, { value: -this.props.level, star: "Negative" }),
				
				React.createElement(C.Pendulum, this.props.pendulum),
				
				React.createElement(C.Type, { value: this.props.type }),
				React.createElement(C.Effect, { value: this.props.effect }),
				React.createElement(C.Atk, { value: this.props.atk }),
				React.createElement(C.Def, { value: this.props.def }),
				
				React.createElement(C.Serial, { value: this.props.serial }),
				React.createElement(C.Copyright, { value: this.props.copyright })
			);
		}
	});
	DarkSynchro.displayName = "DarkSynchro";
	DarkSynchro.defaultProps = {
	};
	return DarkSynchro;
});
