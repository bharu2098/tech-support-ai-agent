import sqlite3

DB_NAME = "techsupport.db"


def init_db():

    conn = sqlite3.connect(DB_NAME)

    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS memory (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        issue TEXT
    )
    """)

    conn.commit()
    conn.close()


def save_issue(user, issue):

    conn = sqlite3.connect(DB_NAME)

    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO memory(user, issue) VALUES (?, ?)",
        (user, issue)
    )

    conn.commit()
    conn.close()


def get_last_issue(user):

    conn = sqlite3.connect(DB_NAME)

    cursor = conn.cursor()

    cursor.execute("""
    SELECT issue
    FROM memory
    WHERE user = ?
    ORDER BY id DESC
    LIMIT 1
    """, (user,))

    result = cursor.fetchone()

    conn.close()

    if result:
        return result[0]

    return "No previous issues found"