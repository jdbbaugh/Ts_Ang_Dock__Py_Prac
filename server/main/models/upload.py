# -*- coding: utf-8 -*-

from sqlalchemy import inspect

from server.main import db
from sqlalchemy.sql import func


class BaseModel2(db.Model):
    """Base data model for all objects"""
    __abstract__ = True

    def __init__(self, *args):
        super().__init__(*args)

    def __repr__(self):
        """Define a base way to print models"""
        return '%s(%s)' % (self.__class__.__name__, {
            column: value
            for column, value in self.as_dict().items()
        })

    # def _as_dict(self):
    #     return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    # Preferred way
    # https://stackoverflow.com/questions/1958219/convert-sqlalchemy-row-object-to-python-dict
    def as_dict(self):
        return {c.key: getattr(self, c.key)
                for c in inspect(self).mapper.column_attrs}


class Upload(BaseModel2, db.Model):
    """Model for users table"""
    __tablename__ = "uploads"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    workId = db.Column(db.String(128), nullable=False)
    revenue = db.Column(db.String(128), nullable=False)
    plays = db.Column(db.String(128), nullable=False)
    day = db.Column(db.String(128), nullable=False)
    # using func.now(), so time is calculated by the DB server and not by app server.
    # https://stackoverflow.com/questions/13370317/sqlalchemy-default-datetime?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    created_date = db.Column(db.DateTime, nullable=False, default=func.now())

    def __init__(workId, revenue, plays, day):
        super().__init__()
        self.workId = workId
        self.revenue= revenue
        self.plays = plays
        self.day = day
