export function getColor(tag) {
  switch (true) {
    case isAndroidTechnology(tag):
      return "bg-green-500"
  }
  switch (tag) {
    case "espresso":
    case "retrofit":
    case "aab":
    case "apk":
    case "jetpack":
      return "bg-green-500"
    case "ios":
    case "facebook":
      return "bg-blue-500"
    case "angular":
    case "java":
    case "javascript":
    case "javafx":
    case "hms":
    case "app gallery":
      return "bg-red-500"
    case "kotlin":
      return "bg-purple-500"
    case "firebase":
    case "python":
      return "bg-yellow-500"
    case "swift":
    case "swiftui":
    case "ubuntu":
      return "bg-orange-500"
    case "git":
    case "github":
    case "github actions":
    case "algorithm":
      return "bg-gray-800"
    case "twitter":
    case "flutter":
      return "bg-sky-500"
  }
  return "bg-gray-500"
}

function isAndroidTechnology(tag) {
  return tag?.includes('android')
}
