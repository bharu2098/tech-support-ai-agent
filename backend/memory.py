memory_store = {}

def save_memory(user, issue):

    memory_store[user] = issue

def get_memory(user):

    return memory_store.get(user)