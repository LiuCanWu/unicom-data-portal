import sqlite3
from pathlib import Path

from fastapi import APIRouter, status

from app.schemas.contact import ContactCreate, ContactResponse


router = APIRouter()
database_path = Path(__file__).resolve().parents[2] / "data" / "contacts.db"


def initialize_database() -> None:
    database_path.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(database_path) as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS contact_requests (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                company TEXT NOT NULL,
                question TEXT NOT NULL DEFAULT '',
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )


@router.post("", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def create_contact(contact: ContactCreate) -> ContactResponse:
    """Store a product consultation request for follow-up by the sales team."""
    initialize_database()
    with sqlite3.connect(database_path) as connection:
        cursor = connection.execute(
            """
            INSERT INTO contact_requests (name, phone, company, question)
            VALUES (?, ?, ?, ?)
            """,
            (contact.name, contact.phone, contact.company, contact.question.strip()),
        )
        contact_id = cursor.lastrowid

    return ContactResponse(id=contact_id, message="咨询已提交")
