Các loại phân quyền trong hệ thống web:

1. Role-Based Access Control (RBAC):
    - Roles: Define a set of permissions. For example, roles like admin, editor, user.
    - Permissions: Specific actions that can be performed. For example, create post, edit post, delete post.
    - Users: Assigned one or more roles, which in turn grant them the associated permissions.
2. Attribute-Based Access Control (ABAC):
   - Uses attributes (user attributes, resource attributes, environment attributes) to define access control policies.
   - More flexible and fine-grained compared to RBAC.
3. Discretionary Access Control (DAC):
   - The owner of the resource decides who can access it.
   - Common in file systems where file owners set permissions.
4. Mandatory Access Control (MAC):
   - Access is granted based on fixed policies set by a central authority.
   - Often used in military and government systems