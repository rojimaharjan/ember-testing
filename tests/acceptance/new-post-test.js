import { test } from 'qunit';
import moduleForAcceptance from 'testcase/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new post');

// test('visiting /new-post', function(assert) {
//   visit('/new-post');

//   andThen(function() {
//     assert.equal(currentURL(), '/new-post');
//   });
// });

 /**
  * 1. i input a post
  * 2. i click on a "submit" button
  * 3. i should see a list
  */
test('add new post', function(assert){
	visit('/posts/new');
	// pre-check
	andThen(function(){
		assert.notOk(find('ul.posts').length > 0, 'ul element should not appear');
	});

	fillIn('input.input-post', "a new post");
	click('button.submit');
	andThen(function(){
		assert.ok(find('ul.posts').length > 0, 'ul element is available');
	});
});

 /**
  * 1. i input a post
  * 2. i click on a "submit" button
  * 3. my input should appear at the top of the list
  */
test('add new post', function(assert){
	visit('/posts/new');
	var posts = 'a second post'
	// pre-check
	andThen(function(){
		assert.notEqual(find('ul.posts li:first').text(), `${posts}`,  `"${posts}" should not appear`);
	});

	fillIn('input.input-post', posts);
	click('button.submit');
	andThen(function(){
		assert.equal(find('ul.posts li:first').text(), `${posts}`, `"${posts}" should appear at the top of the list`);
	});
});

