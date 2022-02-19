### What does this pull request change or fix?
*This should be a short (one or two sentence) summary of the changes.*
*List the Jira tickets that this covers.*
*Example:* 
> PDMI-777.  This pull request creates a back door to allow users to skip login.
 
 
 
### What would you like to share with reviewers to help understand these changes?
*Provide any history or background that would help a reviewer evaluate your changes.*
*Example:* 
> We needed a way to skip the user login sequence to facilitate automated testing. 
> This will also speed up some development efforts since we will now be able to skip over the tedious process of logging in each time.
 
 
 
### What code areas were added or changed?
*Provide a more detailed explanation of your work.* 
*You don't have to explicitly list each file or line, but speak to the major points that you want the reviewer to understand.*
*Example:*
> - Added "skipLogin" to the `ApplicationVariables` protocol and `LiveVariables` implementation.
> - Added a "skipLogin" option to the Backdoors section of the Debug view.
> - Extended the `UserCredentials` structure and added a `default` property that contains the default user credentials.
> - Added an action to the Initialization domain to subscribe to the BackdoorSettings publisher, and to return the 'default' credentials.
> - Extended `ApplicationVariablesTests` to test this implementation.
 
 
 
 
### What other components may be impacted by these changes?
*Take some time to consider the impact these changes may have on other components.*
*The types of "impacts" may be changes in asynchronous timing or timeouts, extensions of existing types *
*(such as new error codes), changes to protocols that external systems are utilizing, etc.*
*Essentially, things that go beyond simple interface changes (which should be caught by the compiler anyway)*
*that we should be aware of.*
*Example:*
> - Extended the "Authentication.Error" enum to include ".bannedUser", which is currently
>   not being explicitly handled by the ErrorAlert domain (handled by the `default:` case generically).
> - New error code and description has been added to the History payload sent to the Insulet back-end.
 
 
### Where should a reviewer start?
*This is especially helpful for larger PRs that touch a lot of files.* 
*Suggest a place to begin, or a sequence of files if that would be helpful.*
*Example:*
> I would first look at `ApplicationVariables.swift`, then look at the changes in `InitializationDomain.swift`.
 
 
 
### How should this branch be tested?
*This section is especially critical if there are particular backdoors or pre-conditions that need to be followed.*
*Does testing this require a dev board?  A real device?  A particular user account?*
*If an external component or system will be affected, please describe how that component or system could be tested*
*against this branch*
*Example:* 
> This change only affects running the app in the simulator. Delete the app from your simulator before testing (or the app will crash).
 
 
### What was the test coverage before and after you made these changes?
*Right now our CI process isn't doing this for us, so in order to keep us honest,*
*we should be capturing our code coverage reports before and after these changes were applied,*
*on the areas of the code you touched.* 
 
 
 
## Checkboxes (UI related):
() Does the UI match the design in Abstract _precisely_?
() Do the SwiftUI Previews work?
() Did you create accessibility ids for new UI controls or test-critical elements?
() Does the design work at the _maximum_ dynamic font size?
() Did you test your design in Dark Mode?
() Did you test your UI using smallest and largest devices?
() Are you using the proper LocalizedText interfaces?
 
 
 
 
### Provide screen shots or animations of any UI changes you made.  If you changed pre-existing UI, show before and after shots.
*Remember that screen shots captured from the simulator tend to be quite large,*
*so consider down-sizing them to make it easier to see the changes at a glance.*
