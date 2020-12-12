import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
	/* constructor(...args)
	{
		super(...args);
		this.isLarge=false;
	} */
	@tracked sLarge = false;
	@action toogleSize()
	{this.sLarge=!this.sLarge;}
}
