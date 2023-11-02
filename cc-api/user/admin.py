from .models import User, Code
from .forms import UserCreationForm, UserChangeForm
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ("email", "first_name", "last_name", "staff", "admin", "active", )
    list_filter = ("admin", )

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Personal info", {"fields": ("first_name", "last_name")}),
        ("Permissions", {"fields": ("staff", "admin", "active")})
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide", ),
            "fields": ("email", "first_name", "last_name", "password1", "password2")
        })
    )
    search_fields = ("email", )
    ordering = ("email", )
    filter_horizontal = ()


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
admin.site.register(Code)
