function placeholderChoice()
{
	var placeholder =
	[
		"What's on your mind?",
		"Need to jot something down?",
		"Maybe just sit here a while and write something out :)",
		"Whatever it is, I'm sure jotting it down will help!"
	]

	return placeholder[(Math.floor(Math.random() * 4))];
}

var quill = new Quill('#editor-container',
{
	modules:
	{
		toolbar:
		[
			['bold', 'italic', 'underline'],
		]
	},
	placeholder: (""+placeholderChoice()),
	theme: 'bubble'
});
