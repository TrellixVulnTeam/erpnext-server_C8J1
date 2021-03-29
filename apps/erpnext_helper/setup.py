# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in erpnext_helper/__init__.py
from erpnext_helper import __version__ as version

setup(
	name='erpnext_helper',
	version=version,
	description='Setting up Self Hosted sites via Mdifferent Marketplaces',
	author='Frappe Technologies Pvt Ltd',
	author_email='developers@frappe.io',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
