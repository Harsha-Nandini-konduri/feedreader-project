$(function() {

  //This suite is all about the RSS feeds definitions, the allFeeds variable in our application.

  describe('RSS Feeds', function() {
    //This function is to test whether allfeeds are defined or not.
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    //This function is to test whether allfeeds have URL or not.
    it('URL defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.url).not.toBe(0);
    });

    //This function is to test whether allFeeds have names or not.
    it('names are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.name).not.toBe(0);
    });
  });

  // Hiding or showing of the menu element.
  //ensure menu element is hidden by default.
  describe('The menu', function() {
    var menu = document.body;

    it('hidden menu', function() {
      // test to check if body element(menu) has class menu-hidden
      expect(menu.classList.contains('menu-hidden')).toBe(true);
    });
    //ensures the menu changes visibility when the menu icon is clicked.
    it('menu visibility', function() {
      $(".menu-icon-link").click();
      // test for display menu when clicked
      expect(menu.classList.contains('menu-hidden')).toBe(false);
      $(".menu-icon-link").click();
      // test for hidding menu when clicking again
      expect(menu.classList.contains('menu-hidden')).toBe(true);
    });
  });
  // test suite named Initial Entries
  describe('Initial Entries', function() {

    //loads Asynchronous loadFeed() before each it spec
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    //checks for .entry to contain content
    it('has at least a single .entry element within the .feed container.', function() {
      var feedEntryLen = $('.feed .entry').length;
      expect(feedEntryLen).toBeGreaterThan(0);
    });
  });
  //To ensure the feed which was loadsfeed.
  describe("New Feed Selection", function() {
    let initialFeed, finalFeed;
    let feed = $(".feed");

    beforeEach(function(done) {
      loadFeed(0, function() {
        initialFeed = feed.text();

        loadFeed(1, function() {
          finalFeed = feed.text();
          done();
        });
      });
    });
    //to check the changes in the page content.
    it("changes page content", function(done) {
      expect(finalFeed).not.toEqual(initialFeed);
      done();
    });
  });
}());
