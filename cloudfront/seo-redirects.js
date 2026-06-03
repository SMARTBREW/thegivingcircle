/**
 * CloudFront Function (viewer-request) — SEO 301 redirects for S3 static hosting.
 * Attach to distribution E1N8EZN5Z7I1E7 on viewer-request.
 * Deploy: npm run deploy:cloudfront-redirects
 */
var CANONICAL_HOST = 'www.thegivingcircle.in';
var BASE = 'https://' + CANONICAL_HOST;

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var qs = request.querystring;
  var host = request.headers.host && request.headers.host.value
    ? request.headers.host.value
    : CANONICAL_HOST;

  function redirect(path) {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: BASE + path },
        'cache-control': { value: 'public, max-age=3600' },
      },
    };
  }

  // 1. Force canonical host: apex (and any non-www) -> https://www, one hop,
  //    preserving the original path + query string.
  if (host !== CANONICAL_HOST) {
    var parts = [];
    for (var key in qs) {
      if (qs[key] && qs[key].value !== undefined) {
        parts.push(qs[key].value === '' ? key : key + '=' + qs[key].value);
      }
    }
    var suffix = parts.length ? '?' + parts.join('&') : '';
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: BASE + uri + suffix },
        'cache-control': { value: 'public, max-age=3600' },
      },
    };
  }

  // Strip trailing slash for matching (except root)
  var path = uri;
  if (path.length > 1 && path.charAt(path.length - 1) === '/') {
    path = path.slice(0, -1);
  }

  var rules = {
    '/causes': '/live-causes',
    '/local-seo': '/ngos',
    '/khushi-ngo-detail': '/jwp-cause-details',
    '/khushi-cause-details': '/jwp-cause-details',
    '/donate-for-education-india': '/pehli-class-cause-details',
    '/impact-stories-details': '/impact-stories/wings-of-hope',
    '/ngo-detail/1': '/jwp-cause-details',
    '/ngo-detail/2': '/animalcare-ngo-detail',
    '/ngo-detail/3': '/jwp-cause-details',
    '/ngo/animalcare-india': '/animalcare-ngo-detail',
    '/ngos/ngo-in-noida': '/ngo-in-noida',
    '/ngos/ngo-in-gurugram': '/ngo-in-gurugram',
    '/animal-emergency': '/animal-emergency.html',
    // City NGO adjective variants → one canonical page per city (de-dupe).
    '/ngos/top-ngo-in-delhi': '/ngos/best-ngo-in-delhi',
    '/ngos/verified-ngo-in-delhi': '/ngos/best-ngo-in-delhi',
    '/ngos/trusted-ngo-in-delhi': '/ngos/best-ngo-in-delhi',
    '/ngos/leading-ngo-in-delhi': '/ngos/best-ngo-in-delhi',
    '/ngos/top-ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/verified-ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/trusted-ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/leading-ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/top-ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/verified-ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/trusted-ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/leading-ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/top-ngo-in-faridabad': '/ngos/best-ngo-in-faridabad',
    '/ngos/verified-ngo-in-faridabad': '/ngos/best-ngo-in-faridabad',
    '/ngos/trusted-ngo-in-faridabad': '/ngos/best-ngo-in-faridabad',
    '/ngos/leading-ngo-in-faridabad': '/ngos/best-ngo-in-faridabad',
  };

  if (rules[path]) {
    return redirect(rules[path]);
  }

  if (path.indexOf('/local-seo/') === 0) {
    return redirect('/ngos/' + path.slice('/local-seo/'.length));
  }

  if (path.indexOf('/ngo/') === 0 && path.toLowerCase().indexOf('jwp') !== -1) {
    return redirect('/jwp-cause-details');
  }

  // Block schema placeholder crawl (legacy SearchAction URL)
  if (path === '/live-causes' && qs.search && qs.search.value === '{search_term_string}') {
    return redirect('/live-causes');
  }

  // Pretty-URL rewrite for static (SSG) hosting on an S3 REST origin:
  // extensionless "page" requests -> the pre-rendered .../index.html object.
  // Requests for files (anything with an extension in the last path segment)
  // pass through untouched. Unknown pages still 404 at S3 and fall back to the
  // SPA shell via the distribution's custom error responses.
  var lastSlash = uri.lastIndexOf('/');
  var lastSegment = uri.substring(lastSlash + 1);
  if (lastSegment.indexOf('.') === -1) {
    if (uri.charAt(uri.length - 1) === '/') {
      request.uri = uri + 'index.html';
    } else {
      request.uri = uri + '/index.html';
    }
  }

  return request;
}
