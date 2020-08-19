trigger validationContentDoc on ContentDocument (before insert) {
	system.debug('Debug1'+Trigger.new);
}